const makeArray = (str) => {
  let arr = [...str];

  arr.forEach((v, i) => {
    if (v === "#") {
      arr[i - 1] += "#";
      arr.splice(i, 1);
    }
  });

  return arr;
};

const getMinutes = (start, end) => {
  const [sHour, sMin] = start.split(":").map((v) => v - 0);
  const [eHour, eMin] = end.split(":").map((v) => v - 0);

  return (eHour - sHour) * 60 + eMin - sMin;
};

const getSound = (min, sound) => {
  let ans = [];
  sound = makeArray(sound);
  const repeated = Math.floor(min / sound.length);
  const least = min % sound.length;

  for (let i = 0; i < repeated; i++) {
    ans = [...ans, ...sound];
  }

  ans = [...ans, ...sound.slice(0, least)];
  return ans;
};

const isInclude = (str, word) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === word[0]) {
      let count = 0;
      for (let j = 0; j < word.length; j++) {
        if (str[i + j] === word[j]) {
          count++;
        }
      }
      if (count === word.length) {
        return true;
      }
    }
  }
  return false;
};

const solution = (m, musicinfos) => {
  musicinfos = musicinfos
    .map((music) => {
      const [start, end, title, sound] = music.split(",");

      const min = getMinutes(start, end);
      const playedSound = getSound(min, sound);
      const len = playedSound.length;

      m = makeArray(m);

      return isInclude(playedSound, m) ? { title, len } : "";
    })
    .filter((v) => v !== "")
    .sort((a, b) => b.len - a.len);

  return musicinfos.length === 0 ? "(None)" : musicinfos[0].title;
};

console.log(
  solution("ABC", [
    "14:50,15:04,HI,ABC",
    "12:00,12:32,HELLO,CD#EF#GAB",
    "13:00,13:16,WORLD,ABC#D#E#F#",
  ])
);

function cutMel(str) {
  var result = "";
  result = str
    .replace(/C\#/g, "1")
    .replace(/D\#/g, "2")
    .replace(/F\#/g, "3")
    .replace(/G\#/g, "4")
    .replace(/A\#/g, "5");
  return result;
}

console.log(cutMel("A#ABC#E"));
