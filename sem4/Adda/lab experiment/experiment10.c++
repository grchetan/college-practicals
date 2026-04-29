#include <iostream>
using namespace std;
int linear(int arr[],int n,int key){
    for(int i=0;i<n;i++)
        if(arr[i]==key) return i;
    return -1;
}
int binary(int arr[],int n,int key){
    int l=0,r=n-1;
    while(l<=r){
        int m=(l+r)/2;
        if(arr[m]==key) return m;
        else if(arr[m]<key) l=m+1;
        else r=m-1;
    }
    return -1;
}
int main(){
    int arr[]={10,20,30,40,50};
    int key=30;
    cout<<"Linear: "<<linear(arr,5,key)<<endl;
    cout<<"Binary: "<<binary(arr,5,key)<<endl;
}
