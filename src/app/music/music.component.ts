import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Music } from './music.model';

const MUSICS: Music[] = [
  {
    song: 'same-drugs',
    header: 'Chance The Rapper - Same Drugs',
    title: '"You were always perfect, and I was only practice"',
    text: 'What if you realized, early on, that I was just practice? I\'m sure that there are funny \
      software developers out there who can also remember the kids\' appointments, and are expert gift-givers. \
      I came to you emotionally undercooked 16 years ago, and you could have taken your talents elsewhere any time \
      in those first 5 years. How do people fall in love in their 20s and stay in love in their 40s and beyond? Maybe we\'re gifted, or \
      persistent, or maybe we\'re lucky. Regardless, I hear this song and feel relieved that we still do the same drugs. ',
    spotifyEmbed: 'https://open.spotify.com/embed/track/6m9qPYXmhge2QhBLfFKnVF'
  },
  {
    song: 'come-down-now',
    header: 'Passing Strange Ensemble - Come Down Now',
    title: '"I\'ve been thinking about leaving / My fingerprints on your being / It\'s like church now"',
    text: 'My god, I get so weepy during this number. I don\'t think that I even listened to musicals before I met you. \
      I mean, what use is a musical form that communicates directly with mankind\'s heart, anyway? This is the best articulation \
      of the impact you have on me. There\'s a religious imprinting that has happened, some sort of brain-rewiring that causes me to \
      talk, and act, and behave in a way that is infused with empathy. There\'s an altnernate universe where I\'m alone, \
      trolling Men\'s Rights Activist forums and getting fired for writing bone-headed internal memos.',
    spotifyEmbed: 'https://open.spotify.com/embed/track/3eMV1Uifvr9ok9D87m2Vnp'
  },
  {
    song: 'game-shows',
    header: 'The Mountain Goats - Game Shows Touch Our Lives',
    title: '"Shadows crawled across the living room\'s length / I held on to you with a desperate strength"',
    text: 'I have this vision of lounging around Saturday afternoons and wrestling you to stay on the couch with me, to do nothing \
      together. I just want to sit, and be in your presence, listening to music that hopefully doesn\'t grate on your nerves too \
      much, while I do the crossword that I\'ve stolen from you that day. This is really about building a decades-long relationship, \
      though, and I think that requires a desperate strength. Every day you renew my desperation.',
    spotifyEmbed: 'https://open.spotify.com/embed/track/6GbOE6jRrtTuFVOz4gaHKz'
  },
  {
    song: 'florida',
    header: 'The-Dream - Florida University',
    title: '"What rhyme with asshole? / ASSHOLE"',
    text: 'You thought it was going to be all sad-sack music? This song\'s lyrics are aggresively bad, but they\'re also goofy, \
      and we both giddily laugh when it pops up on my old mix CDs. It also helps that it has a huge catchy riff running through it. \
      I may never convince you of the genius of The-Dream, but I want to make a whole genre out of stupid-lyric songs that make you \
      laugh. I hope, when we get old, that we got food everywhere, as if the party was catered.',
    spotifyEmbed: 'https://open.spotify.com/embed/track/2WRFQjbQynfOOndqW9M6rU'
  },
  {
    song: 'vampires',
    header: 'Jason Isbell - If We Were Vampires',
    title: '"It\'s not your hands searching slow in the dark / Or your nails leaving love\'s watermark"',
    text: 'For a tune centered around the mortality of their relationship, there are surprising elements of love, tenderness and joy \
      in there. The idea that mortality makes a relationship more meaningful also brings to mind plowing through all those Angel-era \
      Buffy episodes dug up on IRC channels back in the day. 40 years sounds like such a long time, but then I realize we\'re more \
      than a third of way there! ',
    spotifyEmbed: 'https://open.spotify.com/embed/track/250RLekaiL1q9qZer975Eg'
  },
  {
    song: 'rock-bottom',
    header: 'Modern Baseball - Rock Bottom',
    title: '"There\'s no good reason why I should leave your bed tomorrow / We can watch planet earth and brainstorm tattoos"',
    text: 'There are some days where I think if I didn\'t have kids or a job, I would have no reason to leave your bed. There \
      are many mornings where I just want to meld into you. Maybe it\'s about time I got a tattoo. I was always afraid that 20s \
      Dave would choose something 30s Dave, or his wife, thought was dumb. Now that I have someone who will stick with me no matter \
      what dumb shit I do, it seems like the appropriate time to etch my skin with some design. Any ideas?',
    spotifyEmbed: 'https://open.spotify.com/embed/track/2fz0ZdAu8kcqdXQ3IuN3YP'
  }
];

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  constructor(
    public sanitizer: DomSanitizer,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  music: Music;

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => this.music = MUSICS.find(music => music.song === params['song']));
  }

}
