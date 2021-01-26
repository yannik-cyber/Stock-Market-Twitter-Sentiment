import pandas as pd
import pandas_datareader as web
from datetime import datetime
from dateutil.relativedelta import relativedelta

aktiennamen = pd.read_csv('../dataaktien_clean.csv')

end = datetime.now()
start = datetime.now() - relativedelta(years=5) #Years bestimmt Zeitraum            

for i in aktiennamen['0']:
    StockPrice = web.DataReader(i, "yahoo", start, end) 
    data = pd.DataFrame(data=StockPrice)
    print(i)
    print(data)