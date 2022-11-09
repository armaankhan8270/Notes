![Screenshot (225)](https://user-images.githubusercontent.com/98936216/186478120-fa74368d-b179-4abd-a2ba-bad10c88ccd6.png)
![Screenshot (226)](https://user-images.githubusercontent.com/98936216/186478149-994a6ff2-b774-4127-b633-88a9de984323.png)
Exp 10
import networkx as nx 
import matplotlib.pyplot as plt

G = nx.DiGraph()

G.add_edges_from([('A','D'),('B','C'),('B','E'),('C','A'),
                  ('D','C'),('E','D'),('E','B'),('E','F'),
                  ('E','C'),('F','C'),('F','H'),('G','A'),
                  ('G','C'),('H','A') ])

plt.figure(figsize=(10,10))
nx.draw_networkx(G,with_labels=True)

hubs, authorities = nx.hits(G, max_iter=50,normalized=True)

print("Hub Scores: ",hubs)
print("Authority Scores: ", authorities)

Exp 8 apriori
import pandas as pd
from mlxtend.preprocessing import TransactionEncoder
from mlxtend.frequent_patterns import apriori
from mlxtend.frequent_patterns import association_rules

dataset =[['milk','onion','nutmeg','kidney beans','eggs','yogurt'],
['dill','onion','nutmeg','kidney beans','eggs','yogurt'],
['milk','apple','kidney beans','eggs'],
['milk','unicorn','corn','kidney beans','yogurt'],
['corn','onion','onion','kidney beans','ice cream','eggs'],
]

te = TransactionEncoder()
te_ary = te.fit(dataset).transform(dataset)
df = pd.DataFrame(te_ary, columns=te.columns_)
df

frequent_itemsets = apriori(df,min_support=0.6,use_colnames=True)
frequent_itemsets

res = association_rules(frequent_itemsets, metric='confidence',min_threshold=0.7)
res

res1 = res[['antecedents','consequents','support','confidence','lift']]
res1

res2= res1[res['confidence'] >=1]
res2

Exp 7 kmean
from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
#making datasets
X ,y= make_blobs(
    n_samples=50,
    centers=3,
    n_features=2,
    random_state=20
)
plt.scatter(X[:, 0], X[:, 1])
y_pred = KMeans(n_clusters=3, random_state=42).fit_predict(X)
km = KMeans(n_clusters=3, random_state=42).fit(X)
a = km.cluster_centers_
plt.scatter(a[:,0],a[:,1],color='red')
plt.scatter(X[:, 0], X[:, 1], c=y_pred)
plt.title("Incorrect Number of Blobs")
plt.show()

Exp 6 baysian
import seaborn as sns
import matplotlib.pyplot as plt 
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import classification_report
from pandas.plotting import scatter_matrix 
from sklearn import metrics

   data = sns.load_dataset("iris")
data.head(10)

x = data.iloc[:,:-1]
y = data.iloc[:,-1]

from sklearn.model_selection import train_test_split
x_train, x_test, y_train, y_test = train_test_split(x, y, 
                              test_size=0.2, random_state=42)

model = GaussianNB()
model.fit(x_train, y_train)
GaussianNB()

y_pred = model.predict(x_test)

print(classification_report(y_test, y_pred))

scatter_matrix(data)
plt.show()
