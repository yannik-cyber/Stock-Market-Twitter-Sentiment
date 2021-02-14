import pandas as pd
# import sklearn as skit
import matplotlib as plt
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.tree import export_graphviz
import graphviz
from sklearn.ensemble import RandomForestClassifier

pd.set_option('display.max_columns', 15)
pd.set_option('display.max_rows', 20)





stocks = pd.DataFrame(pd.read_csv('/Users/yannikhubrich/Documents/Studium/3Semester/GitHub/FintechConsulting/dataaktien_clean.csv', sep=';'))
stocks = stocks.drop(columns=['Name'])


# print(tw)
#print(stocks)

def clean_alt_list(list_):
    list_ = list_.replace(', ', '","')
    list_ = list_.replace('[', '["')
    list_ = list_.replace(']', '"]')
    return list_


def get_df(ticker):
    tw = pd.DataFrame(pd.read_csv('/Users/yannikhubrich/Documents/Studium/3Semester/GitHub/FintechConsulting/twitter_and_stockdata_cleaned_final.csv'))
    tw = tw.drop(columns=['Unnamed: 0', 'Unnamed: 0.1', 'username', 'id', 'text', 'Score'])
    tw["Symbol"] = tw["Symbol"].apply(eval)
    # df['Growth_one_day'] = df['Growth_one_day'].apply(clean_alt_list)
    tw['Growth_one_day'] = tw['Growth_one_day'].apply(eval)
    df = tw

    for i in range(len(df)):
        symbol_list = df['Symbol'][i]
        #print(symbol_list)
        #print(type(symbol_list))
        growth_list = df['Growth_one_day'][i]
        #print(growth_list)
        #print(type(growth_list))
        # print(type(df['Symbol'][i]))
        # print(type(df['Growth_one_day'][i]))
        if (ticker in symbol_list):
            df.at[i, 'Symbol'] = ticker
            index = symbol_list.index(ticker)
            growth = growth_list[index]
            df.at[i, 'Growth_one_day'] = float(growth)
        else:
            df.at[i, 'Symbol'] = ''
            df.at[i, 'Growth_one_day'] = ''
    df = df.drop(df[df.Symbol == ''].index)
    aggregate_functions = {'retweet': 'sum', 'likes': 'sum', 'Symbol': 'first', 'Subjectivity': 'mean',
                           'Polarity': 'mean', 'Growth_one_day': 'first'}
    df = df.groupby(df['date']).aggregate(aggregate_functions)
    df.loc[df['Growth_one_day'] > 0, 'Growth_one_day'] = 1
    df.loc[df['Growth_one_day'] < 0, 'Growth_one_day'] = -1
    #print(df)
    return df


def make_modell(df):
    if len(df) != 0:
        Symbol = df['Symbol'][0]
        length = len(df)
        if length >= 50:
            print('---------------------------------------------------------------------------------------')
            print(Symbol)

            #print(f'The length of the Dataframe {Symbol} is {length}')
            #print(df)
            Y = np.asarray(df['Growth_one_day'])
            X = np.asarray(df[['retweet', 'likes', 'Subjectivity', 'Polarity']])

            X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.25, shuffle=True)

            #decsion tree
            tree = DecisionTreeClassifier(random_state=0)
            tree.fit(X_train, y_train)
            print("DECISION TREE Accuracy on training set: {:.3f}".format(tree.score(X_train, y_train)))
            print("DECISION TREE Accuracy on test set: {:.3f}".format(tree.score(X_test, y_test)))

            export_graphviz(tree, out_file="tree.dot", class_names=["1", "-1"], feature_names=['retweet', 'likes', 'Subjectivity', 'Polarity'], impurity=False, filled=True)
            with open("tree.dot") as f:
                dot_graph = f.read()
            #print(graphviz.Source(dot_graph))
            #random forest
            forest = RandomForestClassifier(n_estimators=5, random_state=2)
            forest.fit(X_train, y_train)
            print("RANDOM FOREST Accuracy on training set: {:.3f}".format(forest.score(X_train, y_train)))
            print("RANDOM FOREST Accuracy on test set: {:.3f}".format(forest.score(X_test, y_test)))



tickerlist = stocks['Symbol'].tolist()
#print(tickerlist)
for tickersymbol in tickerlist:
    #print(tickersymbol)
    dataframe = get_df(tickersymbol)
    make_modell(dataframe)


#df = get_df('GOOG')
#print(df)

# df = df.drop(columns=['Symbol'])

# print(df.corr(method='pearson'))
