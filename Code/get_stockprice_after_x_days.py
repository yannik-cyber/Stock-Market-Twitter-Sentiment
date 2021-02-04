import pandas as pd
import yfinance as yf
import datetime as dt
from yahoofinance import getStocktdata
import numpy as np
pd.set_option('display.max_columns', 10)
pd.set_option('display.max_rows', 5)

path = '/Users/yannikhubrich/Documents/Studium/3Semester/GitHub/FintechConsulting/twitter_data_with_sentiment.csv'

tw = pd.DataFrame(pd.read_csv(path))
#tw = twitter.head(10)

tw['date'] = pd.to_datetime(tw['date'])
tw['Growth_one_day'] = ''
tw["Symbol"] = tw["Symbol"].apply(eval)

print(tw)

for i in range(len(tw['Symbol'])):
    symbol_list = tw['Symbol'][i]
    date = pd.Timestamp.date(tw['date'][i])
    start_date = date + dt.timedelta(days=1)
    end_date = date + dt.timedelta(days=2)
    if end_date < dt.date(2021,1,1):
        print('___________________________________________________')
        print(symbol_list)
        print(start_date)
        print(end_date)
        growth_one_day_list = []
        new_symbol_list = []
        for s in range(len(symbol_list)):
            symbol = symbol_list[s]
            print(symbol)
            growth_one_day = getStocktdata(start=start_date, end=end_date, ticker=symbol)

            if growth_one_day != None:
                growth_one_day_list.append(f'{growth_one_day}')
                new_symbol_list.append(symbol)
        print(growth_one_day_list)
        print(new_symbol_list)
        tw.at[i, 'Growth_one_day'] = growth_one_day_list
        tw.at[i, 'Symbol'] = new_symbol_list
        print(tw.at[i, 'Growth_one_day'])
        print(tw.at[i, 'Symbol'])


print(tw)

tw.to_csv('/Users/yannikhubrich/Documents/Studium/3Semester/GitHub/FintechConsulting/twitter_and stock_growth_data_final.csv')
