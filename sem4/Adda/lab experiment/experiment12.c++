#include <iostream>
using namespace std;
#define N 4
bool safe(int b[N][N],int r,int c){
    for(int i=0;i<c;i++) if(b[r][i]) return false;
    for(int i=r,j=c;i>=0&&j>=0;i--,j--) if(b[i][j]) return false;
    for(int i=r,j=c;i<N&&j>=0;i++,j--) if(b[i][j]) return false;
    return true;
}
bool solve(int b[N][N],int c){
    if(c>=N) return true;
    for(int i=0;i<N;i++){
        if(safe(b,i,c)){
            b[i][c]=1;
            if(solve(b,c+1)) return true;
            b[i][c]=0;
        }
    }
    return false;
}
int main(){
    int b[N][N]={0};
    solve(b,0);
    for(int i=0;i<N;i++){
        for(int j=0;j<N;j++)
            cout<<b[i][j]<<" ";
        cout<<endl;
    }
}
