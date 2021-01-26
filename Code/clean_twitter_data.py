import pandas as pd
import re
import numpy as np

pd.set_option('max_columns',10)
pd.set_option('max_rows',50)

#has to be changed pn every system
df_tw_path = '/Users/yannikhubrich/Documents/Studium/3Semester/GitHub/FintechConsulting/twitter_data.csv'

df_tw = pd.DataFrame(pd.read_csv(df_tw_path,sep=','))
df_tw["Symbol"] = ''

df_tw.loc[0, ['Symbol']] = 'AAA'
print(df_tw.head(5))




def clean_twitter_df(df_tw):
    #has to be changed pn every system
    df_akt_path = '/Users/yannikhubrich/Documents/Studium/3Semester/GitHub/FintechConsulting/dataaktien_clean.csv'

    df_akt = pd.DataFrame(pd.read_csv(df_akt_path, ';'))
    dropping_indexes = []
    for i in range(len(df_tw.index)):
        #print(df_tw['text'][i])
        tw_text = df_tw['text'][i]
        #print(tw_text)
        match = re.findall(r'\$(\w+)',tw_text)
        print(match)
        if match == []:
            dropping_indexes.append(i)
        else:
            df_tw.at[i, 'Symbol'] = match
            #df_tw.assign({'Symbol': [match]}, index=[i])
    df_tw = df_tw.drop(index=dropping_indexes)
    df_tw = df_tw.drop(labels='Unnamed: 0', axis=1)
    df_tw.to_csv('/Users/yannikhubrich/Documents/Studium/3Semester/GitHub/FintechConsulting/twitter_data_clean.csv')


clean_twitter_df(df_tw)

