#include <iostream>
using namespace std;
#define V 5
bool safe(int v,int g[V][V],int path[],int pos){
    if(g[path[pos-1]][v]==0) return false;
    for(int i=0;i<pos;i++) if(path[i]==v) return false;
    return true;
}
bool solve(int g[V][V],int path[],int pos){
    if(pos==V) return g[path[pos-1]][path[0]]==1;
    for(int v=1;v<V;v++){
        if(safe(v,g,path,pos)){
            path[pos]=v;
            if(solve(g,path,pos+1)) return true;
            path[pos]=-1;
        }
    }
    return false;
}
int main(){
    int g[V][V]={
        {0,1,0,1,0},
        {1,0,1,1,1},
        {0,1,0,0,1},
        {1,1,0,0,1},
        {0,1,1,1,0}
    };
    int path[V];
    for(int i=0;i<V;i++) path[i]=-1;
    path[0]=0;
    if(solve(g,path,1)){
        for(int i=0;i<V;i++) cout<<path[i]<<" ";
        cout<<path[0];
    } else cout<<"No solution";
}
