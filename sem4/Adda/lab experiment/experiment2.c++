#include <iostream>
using namespace std;
int linearSearch(int arr[], int n, int key) {
    for(int i = 0; i < n; i++)
        if(arr[i] == key) return i;
    return -1;
}
int main() {
    int arr[] = {10,20,30,40,50};
    int key = 30;
    int res = linearSearch(arr, 5, key);
    if(res != -1)
        cout << "Found at index: " << res;
    else
        cout << "Not found";
}
