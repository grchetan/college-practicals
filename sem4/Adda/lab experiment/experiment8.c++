#include <iostream>
#include <climits>
using namespace std;
int main(){
    int g[5][5]={
        {0,10,0,30,100},
        {10,0,50,0,0},
        {0,50,0,20,10},
        {30,0,20,0,60},
        {100,0,10,60,0}
    };
    int dist[5],vis[5]={0};
    for(int i=0;i<5;i++) dist[i]=INT_MAX;
    dist[0]=0;
    for(int c=0;c<4;c++){
        int u=-1;
        for(int i=0;i<5;i++)
            if(!vis[i]&&(u==-1||dist[i]<dist[u])) u=i;
        vis[u]=1;
        for(int v=0;v<5;v++)
            if(g[u][v] && dist[u]+g[u][v]<dist[v])
                dist[v]=dist[u]+g[u][v];
    }
    for(int i=0;i<5;i++)
        cout<<i<<" "<<dist[i]<<endl;
}
