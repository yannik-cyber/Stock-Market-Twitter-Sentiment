import pandas as pd
import datetime as dt
import re
pd.set_option('display.max_columns', 15)
pd.set_option('display.max_rows', 10)

path = '/Users/yannikhubrich/Documents/Studium/3Semester/GitHub/FintechConsulting/twitter_and stock_growth_data_final.csv'

tw = pd.DataFrame(pd.read_csv(path))
tw = tw.drop(tw[tw.Symbol == '[]'].index)
tw.reset_index()
#print(tw)
tw.to_csv('/Users/yannikhubrich/Documents/Studium/3Semester/GitHub/FintechConsulting/twitter_and_stockdata_cleaned_almost_final.csv')

#step 2

tw = pd.DataFrame(pd.read_csv('/Users/yannikhubrich/Documents/Studium/3Semester/GitHub/FintechConsulting/twitter_and_stockdata_cleaned_almost_final.csv'))

tw = tw.drop(columns=['Unnamed: 0', 'Unnamed: 0.1', 'Unnamed: 0.1.1'])

#print(tw)
list_of_dates_to_delete = []
for i in range(len(tw)):
    date = tw.iloc[i,2]
    date_time_str = date
    date_time_str = re.sub(r'-', '/', date_time_str)
    date_time_obj = dt.datetime.strptime(date_time_str, '%Y/%m/%d %H:%M:%S')
    date_time_obj = date_time_obj.date()
    #print(date)
    #print(type(date))
    date = date_time_obj + dt.timedelta(days=2)
    #print(date)
    if date >= dt.date(2021,1,1):
    #    print(i)
        list_of_dates_to_delete.append(i)

#print(list_of_dates_to_delete)
#print(len(list_of_dates_to_delete))
tw = tw.drop(index=list_of_dates_to_delete)
tw.to_csv('/Users/yannikhubrich/Documents/Studium/3Semester/GitHub/FintechConsulting/twitter_and_stockdata_cleaned_final.csv')
#print(tw)

#Thrid Step: Aggregate all dates

tw = pd.DataFrame(pd.read_csv('/Users/yannikhubrich/Documents/Studium/3Semester/GitHub/FintechConsulting/twitter_and_stockdata_cleaned_final.csv'))
tw.drop(columns=['Unnamed: 0'])

tw['date'] = pd.to_datetime(tw['date'])
tw['date'] = tw['date'].apply(lambda x: x.date())

print(tw)

tw.to_csv('/Users/yannikhubrich/Documents/Studium/3Semester/GitHub/FintechConsulting/twitter_and_stockdata_cleaned_final.csv')





