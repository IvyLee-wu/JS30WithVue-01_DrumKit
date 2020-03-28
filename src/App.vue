<template>
  <div id="app">
    <div class="keys">
      <div
        v-for="item in items"
        :key="item.keycode"
        :data-key="item.keycode"
        class="key"
        @transitionend="removePlaying($event, item)"
      >
        <kbd>{{ item.alphabet }}</kbd>
        <span class="sound">{{ item.mode }}</span>
        <audio :src="item.audio" :data-key="item.keycode"></audio>
      </div>
    </div>
  </div>
</template>

<script>
// :class="[item.isPlaying ? 'playing': '', 'key']"

export default {
  name: 'App',
  // el: '#app',
  data () {
    return {
      items: [
        {
          keycode: '65',
          alphabet: 'a',
          mode: 'clap',
          // isPlaying: false,
          audio: '../sounds/clap.wav'
        },
        {
          keycode: '83',
          alphabet: 's',
          mode: 'hihat',
          // isPlaying: false,
          audio: '../sounds/hihat.wav'
        },
        {
          keycode: '68',
          alphabet: 'd',
          mode: 'kick',
          // isPlaying: false,
          audio: '../sounds/kick.wav'
        },
        {
          keycode: '70',
          alphabet: 'f',
          mode: 'openhat',
          // isPlaying: false,
          audio: '../sounds/openhat.wav'
        },
        {
          keycode: '71',
          alphabet: 'g',
          mode: 'boom',
          // isPlaying: false,
          audio: '../sounds/boom.wav'
        },
        {
          keycode: '72',
          alphabet: 'h',
          mode: 'ride',
          // isPlaying: false,
          audio: '../sounds/ride.wav'
        },
        {
          keycode: '74',
          alphabet: 'j',
          mode: 'snare',
          // isPlaying: false,
          audio: '../sounds/snare.wav'
        },
        {
          keycode: '75',
          alphabet: 'k',
          mode: 'tom',
          // isPlaying: false,
          audio: '../sounds/tom.wav'
        },
        {
          keycode: '76',
          alphabet: 'l',
          mode: 'tink',
          // isPlaying: false,
          audio: '../sounds/tink.wav'
        }
      ]
    }
  },
  methods: {
    addSound: function (e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
      if (!audio) return
      audio.currentTime = 0
      audio.play()
      key.classList.add('playing')
      // console.log(e, key)
    },
    removePlaying: function (e) {
      if (e.propertyName !== 'transform') return
      e.target.classList.remove('playing')
      // console.log(e)
    }
  },
  mounted: function () {
    window.addEventListener('keydown', this.addSound)
  }
}
</script>

<style>
html {
  font-size: 10px;
  background: url(https://i.imgur.com/b9r5sEL.jpg) bottom center;
  background-size: cover;
}
body,
html {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.keys {
  display: flex;
  flex: 1;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}
.key {
  border: 0.4rem solid black;
  border-radius: 0.5rem;
  margin: 1rem;
  font-size: 1.5rem;
  padding: 1rem 0.5rem;
  width: 10rem;
  text-align: center;
  transition: all 0.07s ease;
  background: rgba(0, 0, 0, 0.4);
  text-shadow: 0 0 0.5rem black;
  color: white;
}
kbd {
  display: block;
  font-size: 4rem;
  text-transform: uppercase;
}
span {
  font-size: 1.2rem;
  color: #ffc600;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
}
.playing {
  border-color: #ffc600;
  box-shadow: 0 0 1rem #ffc600;
  transform: scale(1.1);
}
</style>
