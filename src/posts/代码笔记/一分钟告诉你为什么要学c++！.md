---
icon: laptop-code
title: 一分钟告诉你为什么要学c++！
date: 2023-12-07
category:
  - 编程语言
tag:
  - cpp
---

很简单，因为c++有丰富的STL库，~~可以让我偷懒~~

举个栗子吧

这是我刚开始学平衡树的时候写的源码：

```cpp
#include<cstdio>
#include<algorithm>
#include<cstdlib>
using namespace std;
const int SIZE=100010;
struct Treap{
	int l,r;
	int val,dat;
	int cnt,size;
}a[SIZE];
int tot,root,n,INF=0x7fffffff;
inline int New(int val){
	a[++tot].val=val;
	a[tot].dat=rand();
	a[tot].cnt=a[tot].size=1;
	return tot;
}
inline void Update(int p){
	a[p].size=a[a[p].l].size+a[a[p].r].size+a[p].cnt;
}
inline void Build(){
	root=New(-INF);
	a[root].r=New(INF);
	Update(root);
}
int GetRankByVal(int p,int val){
	if(p==0)return -2;
	if(val==a[p].val)return a[a[p].l].size+1;
	if(val<a[p].val)return GetRankByVal(a[p].l,val);
	return GetRankByVal(a[p].r,val)+a[a[p].l].size+a[p].cnt;
}
int GetValByRank(int p,int rank){
	if(p==0)return INF;
	if(a[a[p].l].size>=rank)return GetValByRank(a[p].l,rank);
	if(a[a[p].l].size+a[p].cnt>=rank)return a[p].val;
	return GetValByRank(a[p].r,rank-a[a[p].l].size-a[p].cnt);
}
void zig(int &p){
	int q=a[p].l;
	a[p].l=a[q].r;a[q].r=p;p=q;
	Update(a[p].r);Update(p);
}
void zag(int &p){
	int q=a[p].r;
	a[p].r=a[q].l,a[q].l=p,p=q;
	Update(a[p].l),Update(p);
}
void Insert(int &p,int val){
	if(p==0){
		p=New(val);
		return;
	}
	if(val==a[p].val){
		a[p].cnt++;Update(p);
		return;
	}
	if(val<a[p].val){
		Insert(a[p].l,val);
		if(a[p].dat<a[a[p].l].dat)zig(p);
	}
	else{
		Insert(a[p].r,val);
		if(a[p].dat<a[a[p].r].dat)zag(p);
	}
	Update(p);
}
int GetPre(int val){
	int ans=1;
	int p=root;
	while(p){
		if(val==a[p].val){
			if(a[p].l>0){
				p=a[p].l;
				while(a[p].r>0)p=a[p].r;
				ans=p;
			}
			break;
		}
		if(a[p].val<val&&a[p].val>a[ans].val)ans=p;
		p=val<a[p].val?a[p].l:a[p].r;
	}
	return a[ans].val;
}
int GetNext(int val){
	int ans=2;
	int p=root;
	while(p){
		if(val==a[p].val){
			if(a[p].r>0){
				p=a[p].r;
				while(a[p].l>0)p=a[p].l;
				ans=p;
			}
			break;
		}
		if(a[p].val>val&&a[p].val<a[ans].val)ans=p;
		p=val<a[p].val?a[p].l:a[p].r;
	}
	return a[ans].val;
}
void Remove(int &p,int val){
	if(p==0)return;
	if(val==a[p].val){
		if(a[p].cnt>1){
			a[p].cnt--;
			Update(p);
			return;
		}
		if(a[p].l||a[p].r){
			if(a[p].r==0||a[a[p].l].dat>a[a[p].r].dat)
			 	zig(p),Remove(a[p].r,val);
			else 
				zag(p),Remove(a[p].l,val);
			Update(p);
		}
		else p=0;
		return;
	}
	val<a[p].val?Remove(a[p].l,val):Remove(a[p].r,val);
	Update(p);
}
int main()
{
	srand(20201017);
	Build();
	scanf("%d",&n);
	while(n--){
		int opt,x;
		scanf("%d%d",&opt,&x);
		switch(opt){
			case 1:
				Insert(root,x);
				break;
			case 2:
				Remove(root,x);
				break;
			case 3:
				printf("%d\n",GetRankByVal(root,x)-1);
				break;
			case 4:
				printf("%d\n",GetValByRank(root,x+1));
				break;
			case 5:
				printf("%d\n",GetPre(x));
				break;
			case 6:
				printf("%d\n",GetNext(x));
				break;
		}
	}
	return 0;
}
```

然而用vector就可以很轻松地搞定了捏:yum:

```cpp
#include<bits/stdc++.h>
using namespace std;
#define fre(x) freopen(#x".in","r",stdin);freopen(#x".out","w",stdout)
typedef long long ll;
inline int read(){
    int x=0,f=1;
    char c=getchar();
    while(c<'0'||c>'9'){if(c=='-')f=-1;c=getchar();}
    while(c>='0'&&c<='9'){x=(x<<3)+(x<<1)+(c^48);c=getchar();}
    return x*f;
}
inline void write(ll x){
    char P[105];int w=0;
    if(x<0)putchar('-'),x=-x;
    if(x==0)printf("0");
    while(x)P[++w]=x%10+'0',x/=10;
    for(int i=w;i;i--)putchar(P[i]);
}
vector<int> BT;
int main()
{
	int n;scanf("%d",&n);
	while(n--){
		int opt,x;scanf("%d%d",&opt,&x);
		if(opt==1){
			auto pos=lower_bound(BT.begin(),BT.end(),x);
			BT.insert(pos,x);
		}else if(opt==2){
			auto pos=lower_bound(BT.begin(),BT.end(),x);
			BT.erase(pos);
		}else if(opt==3){
			auto pos=lower_bound(BT.begin(),BT.end(),x);
			printf("%d\n",pos-BT.begin()+1);
		}else if(opt==4){
			printf("%d\n",BT[x-1]);
		}else if(opt==5){
			auto pos=lower_bound(BT.begin(),BT.end(),x);
			pos--;printf("%d\n",*pos);
		}else {
			auto pos=upper_bound(BT.begin(),BT.end(),x);
			printf("%d\n",*pos);
		}
	}
    return 0;
}
```

