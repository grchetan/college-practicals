#include <iostream>
#include <algorithm>
using namespace std;
struct Edge{int u,v,w;};
bool cmp(Edge a,Edge b){ return a.w<b.w; }
int parent[100];
int find(int i){
    if(parent[i]==i) return i;
    return parent[i]=find(parent[i]);
}
void unite(int u,int v){
    parent[find(u)]=find(v);
}
int main(){
    Edge e[]={{0,1,10},{0,2,6},{0,3,5},{1,3,15},{2,3,4}};
    int n=4,m=5;
    for(int i=0;i<n;i++) parent[i]=i;
    sort(e,e+m,cmp);
    cout<<"MST:\n";
    for(int i=0;i<m;i++){
        if(find(e[i].u)!=find(e[i].v)){
            cout<<e[i].u<<"-"<<e[i].v<<endl;
            unite(e[i].u,e[i].v);
        }
    }
}
