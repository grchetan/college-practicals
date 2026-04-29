#include <iostream>
using namespace std;
int main(){
    int d[4][4]={
        {0,5,9999,10},
        {9999,0,3,9999},
        {9999,9999,0,1},
        {9999,9999,9999,0}
    };
    for(int k=0;k<4;k++)
        for(int i=0;i<4;i++)
            for(int j=0;j<4;j++)
                if(d[i][k]+d[k][j]<d[i][j])
                    d[i][j]=d[i][k]+d[k][j];
    for(int i=0;i<4;i++){
        for(int j=0;j<4;j++)
            cout<<d[i][j]<<" ";
        cout<<endl;
    }
}
