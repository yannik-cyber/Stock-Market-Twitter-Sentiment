import pandas as pd
from textblob import TextBlob
import re
import matplotlib.pyplot as plt

pd.set_option('display.max_columns', 10)
pd.set_option('display.max_rows', 5)

df_tw = pd.read_csv('/Users/yannikhubrich/Documents/Studium/3Semester/GitHub/FintechConsulting/twitter_data_clean.csv', delimiter=",")
df_tw = df_tw.drop('Unnamed: 0',1)

def cleanUpTweet(txt):
    # Remove mentions
    txt = re.sub(r'@[A-Za-z0-9_]+', '', txt)
    # Remove hashtags
    txt = re.sub(r'#', '', txt)
    # Remove retweets:
    txt = re.sub(r'RT : ', '', txt)
    # Remove urls
    txt = re.sub(r'https?:\/\/[A-Za-z0-9\.\/]+', '', txt)
    #remove <>
    txt = re.sub(r'<', '', txt)
    txt = re.sub(r'>', '', txt)
    return txt

def getTextSubjectivity(txt):
    return TextBlob(txt).sentiment.subjectivity

def getTextPolarity(txt):
    return TextBlob(txt).sentiment.polarity

# negative, nautral, positive analysis
def getTextAnalysis(a):
    if a < 0:
        return "Negative"
    elif a == 0:
        return "Neutral"
    else:
        return "Positive"

df_tw['text'] = df_tw['text'].apply(cleanUpTweet)


df_tw['Subjectivity'] = df_tw['text'].apply(getTextSubjectivity)
df_tw['Polarity'] = df_tw['text'].apply(getTextPolarity)

df_tw['Score'] = df_tw['Polarity'].apply(getTextAnalysis)



df_tw = df_tw.drop(df_tw[df_tw['Score'] == 'Neutral'].index)

df_tw.to_csv('/Users/yannikhubrich/Documents/Studium/3Semester/GitHub/FintechConsulting/twitter_data_with_sentiment.csv')

