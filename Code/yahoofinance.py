import pandas as pd
import yfinance as yf
import datetime as dt
import time
import requests
import io
pd.set_option('display.max_columns', 10)


def getStocktdata (start, end, ticker):
    #start = datetime.datetime(2020,12,2)
    #end = datetime.datetime(2020,12,3)
    stockinfo = yf.download(ticker, start=start, end=end, progress=False)
    #print(stockinfo)
    count = len(stockinfo)
    #print(count)
    if stockinfo.empty == False:
        if count == 2:
            #print('Dataframe is not empyt')
            avg_price_start = (stockinfo.iloc[0, 0] + stockinfo.iloc[0, 1] + stockinfo.iloc[0, 2] + stockinfo.iloc[0, 3]) / 4
            avg_price_end = (stockinfo.iloc[1, 0] + stockinfo.iloc[1, 1] + stockinfo.iloc[1, 2] + stockinfo.iloc[1, 3]) / 4
            #print(avg_price_start)
            #print(avg_price_end)
            result_one_day = avg_price_end - avg_price_start
            result_one_day = float('{:.2f}'.format(result_one_day))
            return result_one_day




#print(getStocktdata(datetime.datetime(2020,12,30), datetime.datetime(2020,12,31), 'TSLA'))

'''for i in range(500):
    print('_______________________________________________________________')
    print(i)
    start = dt.datetime(2020, 12, 30) - dt.timedelta(days=i)
    end = dt.datetime(2020, 12, 31) - dt.timedelta(days=i)
    ticker = 'TSLA'
    growth = getStocktdata(start, end, ticker)
    print(growth)
'''