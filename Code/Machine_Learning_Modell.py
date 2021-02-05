import pandas as pd
import sklearn as skit
import matplotlib as plt
import numpy as np

pd.set_option('display.max_columns', 15)
pd.set_option('display.max_rows', 20)

tw = pd.DataFrame(pd.read_csv('/Users/yannikhubrich/Documents/Studium/3Semester/GitHub/FintechConsulting/twitter_and_stockdata_cleaned_final.csv'))
tw = tw.drop(columns=['Unnamed: 0','Unnamed: 0.1','username', 'id', 'text', 'Score'])

stocks = pd.DataFrame(pd.read_csv('/Users/yannikhubrich/Documents/Studium/3Semester/GitHub/FintechConsulting/dataaktien_clean_list.csv'))
stocks = stocks.drop(columns=['Unnamed: 0', 'Full_name'])

#print(tw)
#print(stocks)

def clean_alt_list(list_):
    list_ = list_.replace(', ', '","')
    list_ = list_.replace('[', '["')
    list_ = list_.replace(']', '"]')
    return list_

def get_df(ticker):
    df = tw
    df["Symbol"] = df["Symbol"].apply(eval)

    #df['Growth_one_day'] = df['Growth_one_day'].apply(clean_alt_list)
    df['Growth_one_day'] = df['Growth_one_day'].apply(eval)

    for i in range(len(df)):
        symbol_list = df['Symbol'][i]
        growth_list = df['Growth_one_day'][i]
        #print(type(df['Symbol'][i]))
        #print(type(df['Growth_one_day'][i]))
        if (ticker in symbol_list):
            df.at[i, 'Symbol'] = ticker
            index = symbol_list.index(ticker)
            growth = growth_list[index]
            df.at[i, 'Growth_one_day'] = float(growth)
        else:
            df.at[i, 'Symbol'] = ''
            df.at[i,'Growth_one_day'] = ''
    df = df.drop(df[df.Symbol == ''].index)
    aggregate_functions = {'retweet': 'sum', 'likes':'sum', 'Symbol':'first', 'Subjectivity': 'mean', 'Polarity': 'mean', 'Growth_one_day': 'first'}
    df = df.groupby(df['date']).aggregate(aggregate_functions)
    #print(df)
    return df

df = get_df('TSLA')
df = df.drop(columns=['Symbol'])
def histogram_intersection(a, b):
    v = np.minimum(a, b).sum().round(decimals=1)
    return v

print(df.corr(method='pearson'))