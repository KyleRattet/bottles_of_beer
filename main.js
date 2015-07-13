// Lyrics of the song 99 Bottles of Beer
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.

//test 5 works, could be cleaner but prints out correctly
var bottles="bottles";
  for (counter = 99; counter >= 1; counter = counter - 1)
{
    {
    if (counter ===1) {
      bottles = "bottle";
    }
    else {
      bottles = "bottles";
    }
    }
  {
      if (counter===2) {
        console.log(counter+" "+bottles+" of beer on the wall, "+counter+" "+bottles+" of beer.");
        console.log("Take one down, and pass it around, 1 bottle of beer on the wall.");
      }
      if (counter <= 99&& counter>2) {
          console.log(counter+" "+bottles+" of beer on the wall, "+counter+" "+bottles+" of beer.");
          console.log("Take one down, and pass it around, "+(counter-1)+" "+bottles+" "+ "of beer on the wall.");
      }
      if (counter === 1) {
        console.log(counter+" "+bottles+" of beer on the wall, "+counter+" "+bottles+" of beer.");
        console.log("Take one down, and pass it around, "+(counter-1)+" bottles of beer on the wall.");
        console.log("No more bottles of beer on the wall. Go to the nearest beer store to stock up!");
      }
      }
}


//  //test3 -- working but not correct pluralization
// var bottles="bottles";
//  for (counter = 99; counter >= 1; counter = counter - 1)
//  {
//      if (counter <= 99) {
//          console.log(counter+" "+bottles+" of beer on the wall, "+counter+" "+bottles+" of beer.");
//          console.log("Take one down, and pass it around, "+(counter-1)+" "+bottles+" "+ "of beer on the wall.");
//      }
//
//      if (counter == 1) {
//          console.log("No more bottles of beer on the wall. Go to the nearest beer store to stock up!");
//      }
//  }
//
//  //test3 with singular/plural -- try working with the bottles variable/counter
//  var bottles="bottles";
//    for (counter = 5; counter >= 1; counter = counter - 1)
//  {
//      {
//      if (counter ===1) {
//        bottles = "bottle";
//      }
//      else {
//        bottles = "bottles";
//      }
//      }
//    {
//        if (counter <= 5) {
//            console.log(counter+" "+bottles+" of beer on the wall, "+counter+" "+bottles+" of beer.");
//            console.log("Take one down, and pass it around, "+(counter-1)+" "+bottles+" "+ "of beer on the wall.");
//        }
//        if (counter === 1) {
//            console.log("No more bottles of beer on the wall. Go to the nearest beer store to stock up!");
//        }
//        }
//  }
//
// ///test 4
// var bottles="bottles";
//   for (counter = 5; counter >= 1; counter = counter - 1)
// {
//     {
//     if (counter ===1||0) {
//       bottles = "bottle";
//     }
//     else {
//       bottles = "bottles";
//     }
//     }
//   {
//       if (counter ===2){
//         console.log(counter+" "+bottles+" of beer on the wall, "+counter+" "+bottles+" of beer.");
//         console.log("Take one down, and pass it around, "+(counter-1)+" "+bottles+" "+ "of beer on the wall.");
//       }
//       else if (counter===1){
//         console.log(counter+" "+bottles+" of beer on the wall, "+counter+" "+bottles+" of beer.");
//         console.log("Take one down, and pass it around, "+(counter-1)+" "+bottles+" "+ "of beer on the wall.");
//       }
//       }
//       else if (counter <= 5) {
//           console.log(counter+" "+bottles+" of beer on the wall, "+counter+" "+bottles+" of beer.");
//           console.log("Take one down, and pass it around, "+(counter-1)+" "+bottles+" "+ "of beer on the wall.");
//       }
//       else {
//           console.log("No more bottles of beer on the wall. Go to the nearest beer store to stock up!");
//       }
//       }
// }
//
// //test 5 (start from scratch)
//
// var bottles ="";
//
// for (counter = 5; counter < 5; counter --) {
//
//   if (counter <= 5){
//     console.log(counter+" "+)
//   }
//
// }
//
// var bottles="bottles";
//   for (counter = 5; counter >= 1; counter = counter - 1)
// {
//     {
//     if (counter ===1) {
//       bottles = "bottle";
//     }
//     else {
//       bottles = "bottles";
//     }
//     }
//   {
//       if (counter===2) {
//         console.log(counter+" "+bottles+" of beer on the wall, "+counter+" "+bottles+" of beer.");
//         console.log("Take one down, and pass it around, 1 bottle of beer on the wall.");
//       }
//       if (counter <= 5&& counter>2) {
//           console.log(counter+" "+bottles+" of beer on the wall, "+counter+" "+bottles+" of beer.");
//           console.log("Take one down, and pass it around, "+(counter-1)+" "+bottles+" "+ "of beer on the wall.");
//       }
//       if (counter === 1) {
//         console.log(counter+" "+bottles+" of beer on the wall, "+counter+" "+bottles+" of beer.");
//         console.log("Take one down, and pass it around, "+(counter-1)+" bottles of beer on the wall.");
//         console.log("No more bottles of beer on the wall. Go to the nearest beer store to stock up!");
//       }
//       }
// }
 // // for all bottles, not taking into account plural
 // var bottles="bottles";
 // for (counter = 3; counter >= 1; counter = counter - 1)
 // {
 //     /console.log(counter+" "+bottles+" of beer on the wall.");
 //     if (counter < 3) {
 //
 //         console.log(counter+" "+bottles+" of beer on the wall.");
 //     }
 //     console.log(counter+" "+bottles+" of beer.");
 //     console.log("Take one down, and pass it around.");
 //     if (counter == 1) {
 //         console.log("No more bottles of beer on the wall.");
 //     }
 // }
