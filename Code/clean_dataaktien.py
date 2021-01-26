import pandas as pd
import re

df = pd.DataFrame(pd.read_csv('/Users/yannikhubrich/Documents/Studium/3Semester/GitHub/FintechConsulting/dataaktien_clean.csv', sep=','))
df = df.rename(columns={'0': 'Ticker', '1':'Full_name'})
df = df.drop('Unnamed: 0', 1)

print(df.head(50))
print(df.tail(50))

for row in range(len(df.index)):
    #print(df['Full_name'][row])
    value = df['Full_name'][row]

    value = re.sub(r',',r'',value,0)
    value = re.sub(r'\s+$',r'',value)
    print(value)
    value = value.split(sep=' ')

    value_to_add = df['Ticker'][row].split(sep=' ')

    new_value = value + value_to_add

    df['Full_name'][row] = new_value

print(df.head(5))
print(df.tail(5))

df.to_csv('/Users/yannikhubrich/Documents/Studium/3Semester/GitHub/FintechConsulting/dataaktien_clean_list.csv')