#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

// Divide & Conquer: Find Max
int findMax(int arr[], int left, int right) {
    if (left == right) return arr[left];

    int mid = (left + right) / 2;
    int maxLeft = findMax(arr, left, mid);
    int maxRight = findMax(arr, mid + 1, right);

    return max(maxLeft, maxRight);
}

// Dynamic Programming: Fibonacci
int fibonacciDP(int n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;

    vector<int> fib(n + 1);
    fib[0] = 0;
    fib[1] = 1;

    for (int i = 2; i <= n; i++)
        fib[i] = fib[i - 1] + fib[i - 2];

    return fib[n];
}

int main() {
    int choice;
    cout << "1. Find Max (Divide & Conquer)\n2. Fibonacci (DP)\nEnter choice: ";
    cin >> choice;

    if (choice == 1) {
        int n;
        cout << "Enter size: ";
        cin >> n;

        int* arr = new int[n];
        cout << "Enter elements: ";

        for (int i = 0; i < n; i++)
            cin >> arr[i];

        cout << "Max element: " << findMax(arr, 0, n - 1);

        delete[] arr;
    }
    else if (choice == 2) {
        int n;
        cout << "Enter n: ";
        cin >> n;

        cout << "Fibonacci: " << fibonacciDP(n);
    }
    else {
        cout << "Invalid choice!";
    }
}