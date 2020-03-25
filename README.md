## Acme, Inc Employee Directory

**Winning!** This is how you win in the remote workplace:

- Never ping your coworkers at crazy times
- Never forget their birthday
- Be the one who says "Happy Anniversary"
- Connect over coffee when you are traveling 

This app will help you do all of the above. Check it out here: https://react-ee-directory.herokuapp.com/

<img width="1123" alt="Screen Shot 2020-03-25 at 1 54 24 AM" src="https://user-images.githubusercontent.com/15653252/77506229-afd02100-6e3b-11ea-873a-67b74b90f001.png">

The employees listed in this app are not real! They are pulled from `https://randomuser.me/api/?results=100&nat=us`. 

### Using this app

It goes without saying, but you'll want to replace the user data in this app with your real team members. 

One of the limitations of the data set I'm using for this demo is that the latitude and longitude were not accurate. You'll want to remove some of the code in `src/components/MapContainer.js` where I'm assigning random latitude/longitude values to users. The map also centers on Kansas City, MO. You can change that in the same file.

### Contributing to this app

Sure, I'd love contributions! Feel free to open an issue or PR.