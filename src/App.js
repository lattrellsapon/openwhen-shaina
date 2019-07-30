import React, { Component } from 'react';
import WelcomeUser from './components/WelcomeUser';
import Homepage from './components/Homepage';
import uuid from 'uuid';
import './App.css';

export class App extends Component {
  state = {
    username: '',
    usernameFilled: true,
    userMessage: '',
    moods: [
      {
        id: uuid.v4(),
        mood: 'Feeling blessed',
        bibleHeader: 'James 1:17',
        bibleVerse:
          ' Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows.',
        message:
          'YAY! That is the one! My bubba is feeling blessed. I want you to remember that you are always blessed okay? Waking up and getting another chance in life is already a big blessing itself. But of course, you already know that. So there must be a greater reason as to why you opened this letter. Well, whatever it is, I want you to thank Jesus, for this is all from Him. As it says in the bible verse, every good and perfect gift is from above. Do not forget to share this blessing with your loved ones! God bless you even more! ',
        emoji: '🙏'
      },
      {
        id: uuid.v4(),
        mood: 'Feeling joyful',
        bibleHeader: 'Ecclesiastes 9:7',
        bibleVerse:
          'Go, eat your bread with joy, and drink your wine with a merry heart; for God has already accepted your works.',
        message:
          'YAYAYAYAYAYAY. Someone is feeling joyful. Throughout our time of being together, you know how much I always want to make you feel happy or to be happy. To be feeling joyful??? I am very glad that you are. Because as we discussed before, there is a difference in happiness and joy. SEE BUB I LISTEN. You must be joyful for a reason! Knowing you, you probably did something that is within along the lines of service! Or you probably just saw me hahahaha jokes. Whatever it is, you deserve it! Just like the bible verse for this letter, God has accepted something from your work therefore He is rewarding you with joy. You have earned this joy! Go out there and spread it to the world.',
        emoji: '😀'
      },
      {
        id: uuid.v4(),
        mood: 'Feeling excited',
        bibleHeader: 'Jeremiah 29:11',
        bibleVerse:
          'For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope',
        message:
          'Wohooooo someone is excited! I wonder why . . .are you about to see me? HAHAHAHAHHA jokes. BUB, the bible verse said that Jesus knows the plans that He has for you. So that means, whatever it is that is making you feel excited, it is because Jesus has something BIG planned for you! He is just as excited as you are! Probably even more! As you continue to be excited, continue to pray for it as well. Thank Him as well for He is about to bless with this excitement!',
        emoji: '😋'
      },
      {
        id: uuid.v4(),
        mood: 'Feeling loved',
        bibleHeader: 'Jeremiah 31:3',
        bibleVerse:
          'The LORD appeared to us in the past; saying, I have loved you with an everlasting love; I have drawn you with unfailing kindness',
        message:
          'This is because Jesus loves you - I can probably stop there bub because it is more than enough. But I will not because you are special xoxoxoxo. So I better get extra kisses for that okay? OHHH wooooppsss is that too demanding? geeez, okay fine. HAHAHAHAHAH I am joking little cutie. I am not trying to annoy you, but I am trying to make a point. I show my love to you through annoying you ahahhahhaah deal with it. But no, seriously, I was just joking and I just wanted to kulit you. Anywayssssssssss. So you are feeling loved huh? Well that means that Jesus is really alive in your heart. Praise God for that!!! This means that Jesus is flowing through your body like your blood. You are literally feeling Him in you. Jesus is love. God is love. And now, you are love. I love you Shaina Imbo. Jesus loves you the most.',
        emoji: '🥰'
      },
      {
        id: uuid.v4(),
        mood: 'Feeling tired',
        bibleHeader: 'Matthew 11:28-29',
        bibleVerse:
          'Come to me, all you who are weary and burdened, and I will give you rest.   Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.',
        message:
          'Lol take a nap then. AHHAHAHA I a joking my little cutie. Well not really, if you are physically tired, naps are so good for you! But of course, I understand that you can emotionally, mentally, and spiritually tired. Or maybe even Lattrell tired(I HOPE NOT) hahahaha. Lift it up to the Lord, let Him work his magic. Jesus is our source of strength but also our source of rest. Like what the bible verse said bub, He will be gentle with you. So do not be shy, humble yourself and surrender all your tiredness to Him. He will not disappoint you.',
        emoji: '😪'
      },
      {
        id: uuid.v4(),
        mood: 'Feeling lonely',
        bibleHeader: 'Isaiah 41:10',
        bibleVerse:
          'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.',
        message:
          'Ngawwwwwww is someone feeling lonely. Ajujuyyyyyyyyy. Come here ajujuyyyyyy. BIGGGGGGGGGGGGG HUGGGGGGGGGGGGGGG. I am only one 798 away from being someone that you can talk to okay? Or just show up at my house and we will welcome you in. I am sorry that you are feeling this, I hope it does not last for long! I am going to help you to not feel lonely anymore. Is that alright with you? I can only guide you through the first few steps and the rest will be up to you okay? Okay, sweet. First, I want you to find a quiet place. Second, take a deep breath and close your eyes. Now say, In the name of the Father, and of the Son, and of the Holy Spirit. Amen. Go on and talk to Jesus bubba. He has been waiting for you. Enjoy your talk with Jesus. Message me after hehe. I love you.',
        emoji: '🤯'
      },
      {
        id: uuid.v4(),
        mood: 'Feeling sad',
        bibleHeader: 'Philippians 4:6-7',
        bibleVerse:
          'Don’t worry about anything, but in all your prayers ask God for what you need, always asking him with a thankful heart. And God’s peace, which is far beyond human understanding, will keep your hearts and minds safe in union with Christ Jesus.',
        message:
          'Oh no, someone is sad. HMMMPPPPPHHHHH, who made my bubba sad? I hope it was not me haha. Let me know and I will palo them! I put this last because I was hoping you will not have to open it. But I understand that life is not always sunshines and rainbows. Well, I am really sorry to hear that you are sad bub. I am praying that this sadness leaves you soon. You know what? I am going to claim it for you! This will leave soon! As the bible verse said, do not worry about anything! As long as you pray for it, it will be handled by the best God. He is already busy working on this problem for you. So do me favour - look up and say "Thank you Jesus" and then smile for me.',
        emoji: '😢'
      }
    ]
  };

  updateUsername = newUsername => {
    if (newUsername === '') {
      this.setState({
        usernameFilled: false,
        userMessage: 'Please fill in your name'
      });
    } else {
      this.setState({
        username: newUsername
      });
    }
  };

  render() {
    return (
      <div className='container'>
        <WelcomeUser
          username={this.state.username}
          usernameFilled={this.state.usernameFilled}
          userMessage={this.state.userMessage}
          updateUsername={this.updateUsername}
        />
        <div>
          <Homepage username={this.state.username} moods={this.state.moods} />
        </div>
      </div>
    );
  }
}

export default App;
