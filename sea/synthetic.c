#include <stdio.h>

void syntheticDivision(int coefficients[], int n, int divisor, int results[]) {
    int i;
    results[0] = coefficients[0];
    for (i = 1; i < n; i++) {
        results[i] = results[i - 1] * divisor + coefficients[i];
    }
}

int main() {
    int n;
    printf("Enter the degree of the polynomial: ");
    scanf("%d", &n);

    int coefficients[n + 1];
    int i;

    printf("Enter the coefficients of the polynomial from highest degree to lowest:\n");
    for (i = n; i >= 0; i--) {
        printf("Coefficient for x^%d: ", i);
        scanf("%d", &coefficients[i]);
    }

    int divisor;
    printf("Enter the divisor (c): ");
    scanf("%d", &divisor);

    int results[n];

    syntheticDivision(coefficients, n + 1, divisor, results);

    printf("The results of synthetic division are:\n");
    for (i = 0; i < n; i++) {
        printf("x^%d: %d\n", n - i - 1, results[i]);
    }

    return 0;
}