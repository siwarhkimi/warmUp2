/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */

function mysteryRange(inputString, rangeSize) {
    var arr = inputString.split("");
    var str = "";
    var array = [];
    var arr1 = [];
    var min = 0;
    var max = 0;

    if (rangeSize > 100) {
        return "You passed 100, please enter a range less than 100";
    }
    else {
        for (var i = 0; i < arr.length; i++) {
            if ((arr[i] === '1') && (i !== arr.length - 1)) {
                arr1[i] = '1' + arr[i + 1];
                arr.splice(i + 1, 1);
            }
            else {
                arr1[i] = arr[i]
            }

        }
        // console.log(arr1)
        min = Number(arr1[0]);
        max = Number(arr1[0]);
        for (var i = 0; i < arr1.length; i++) {
            if (Number(arr1[i]) < min) {
                min = Number(arr1[i]);
            }
            else if (Number(arr1[i]) > max) {
                max = Number(arr1[i]);
            }


        }
        array.push(min, max);

        return array;
    }







}