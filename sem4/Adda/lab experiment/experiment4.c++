#include <iostream>
#include <cmath>
using namespace std;
float dist(int x1,int y1,int x2,int y2){
    return sqrt(pow(x1-x2,2)+pow(y1-y2,2));
}
int main(){
    int x[]={2,12,40,5,12};
    int y[]={3,30,50,1,10};
    int n=5;
    float minDist=1e9;
    for(int i=0;i<n;i++)
        for(int j=i+1;j<n;j++)
            minDist=min(minDist,dist(x[i],y[i],x[j],y[j]));
    cout<<"Closest Distance: "<<minDist;
}
