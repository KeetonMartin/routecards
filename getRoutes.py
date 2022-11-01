#!/usr/bin/env python

# make sure to install these packages before running:
# pip install pandas
# pip install sodapy

import pandas as pd
from sodapy import Socrata

# Unauthenticated client only works with public data sets. Note 'None'
# in place of application token, and no username or password:
client = Socrata("data.transportation.gov", "Qto9G2rlKlEYzT0U1Kb6RzJLj")

# Example authenticated client (needed for non-public datasets):
# client = Socrata(data.transportation.gov,
#                  MyAppToken,
#                  userame="user@example.com",
#                  password="AFakePassword")

# First 2000 results, returned as JSON from API / converted to Python list of
# dictionaries by sodapy.
# Cities:
# results = client.get("4f3n-jbg2")

# Airports
results = client.get_all("tfrh-tu9e")

# Convert to pandas DataFrame
results_df = pd.DataFrame.from_records(results)

airports = results_df['airport_1'].unique()
# airports2 = results_df['airport_2'].unique()
print(repr(airports))
# print(airports2)


# outputString = ""
# for airport in airports:
#     outputString.append()
