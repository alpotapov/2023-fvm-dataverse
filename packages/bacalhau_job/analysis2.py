import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

# Set seed for reproducibility
np.random.seed(0)

# Create a dataframe with sleep hours and depression score
sleep_less = np.random.normal(loc=6, scale=1.5, size=500)
depression_less = np.random.normal(loc=60, scale=10, size=500)

sleep_more = np.random.normal(loc=9, scale=1.5, size=500)
depression_more = np.random.normal(loc=40, scale=10, size=500)

sleep = np.concatenate([sleep_less, sleep_more])
depression = np.concatenate([depression_less, depression_more])
group = ['<8 hours']*500 + ['>8 hours']*500

data = pd.DataFrame({'Sleep Duration': sleep, 'Depression Score': depression, 'Group': group})

# Create the scatter plot
plt.figure(figsize=(10, 6))
sns.scatterplot(x='Sleep Duration', y='Depression Score', hue='Group', data=data)
plt.title('Correlation between Sleep Duration and Depression')

plt.savefig('sleep_depression_correlation.png')