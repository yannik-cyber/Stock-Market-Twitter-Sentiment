import tweepy
import pandas as pd

consumer_key = "rL6rjZGpiHDdZ3N6E41ctoWY3"
consumer_secret = "LXfM49PEI3JzE7ZUZiLVyZXke3m80CFc6KHCXop8S97SltYJSQ"
access_key = "1346465014354382850-nAltcyhYjkEBQ7LXYoBY24AxS21wkP"
access_secret = "QUonTYP5DEo8FzXU15WLPZgbrkC7MC4jg8rA9uNdWh9yZ"

def get_tweets(username):
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_key, access_secret)
    api = tweepy.API(auth)
    
    number_of_tweets = 50
    tweets = []
    for tweet in tweepy.Cursor(api.user_timeline, screen_name = username).items(number_of_tweets):
        #create array of tweet information: username, tweet id, date/time, text
        tweets.append([username, tweet.id_str, tweet.created_at, tweet.retweet_count, tweet.favorite_count, tweet.text.encode("utf-8")])
    
    return tweets

data = pd.DataFrame(data=get_tweets('CNBC'), columns=['username', 'id', 'date', 'retweet', 'likes', 'text'])
data = data.append(pd.DataFrame(data=get_tweets('business'), columns=['username', 'id', 'date', 'retweet', 'likes', 'text']))
data = data.append(pd.DataFrame(data=get_tweets('nytimes'), columns=['username', 'id', 'date', 'retweet', 'likes', 'text']))

data.to_csv('twitter_data.csv')