## About

Munnin is a tool to aid in text-driven language-learning. So far, I am only implementing the ability to work with subtitles and videos (similar to Fluentu).

This is not yet a functional app, only a mockup with some components to aid in conceptualizing architecture and features.

There are so far three main scenes: Library, Add and Reader. The reader is only designed to work with a very specific type of text (subtitles). Different texts (e.g. e-books, news articles) will require different readers because there ae different things one would like to do with such texts.

## Screenshots

The study view within the reader:
![](./img/reader.png)

Library view displaying the familiarity with different texts:
![](./img/library.png)

## Motivation

Munnin specifically addresses the following problems that I have encountered trying to learn languages with software:

**Problem: SRS solutions are too rigid**
SRS solutions use a stateless projective scheduling algorithm. That is, they will look at how well your memory worked last time, and will then schedule your next review. Although a great idea in theory, in practice this is a very rigid regime with limited practicality. What happens when a student has free time at intervals different to what the algorithm expects (e.g. more time on the weekends)? Or what about wanting to strengthen only vocabulary for specific areas?

**Solution: A retrospective SRS algorithm**
Munnin does not use scheduling algorithm. Instead, Munnin estimates how likely you are to forget each of the words you are learning at a given time using a supervised learning algorithm. The algorithm then allows the user to behave like an adult with this information and decide what to revise whenever s/he has free time.

**Problem: The SRS model sucks for automating flashcard creation from language exposure**
There is no reasonable way in programs such as Anki or Memrise to efficiently automate the creation of flashcards from texts:

It is possible to create flashcards from subtitles with minimal effort - but then all of those flashcards will probably include a lot of text which is already known and the user will have to discard a lot of cards. Also, many of those cards will contain related vocabulary, so some words will be shown many more times than others. If each word is a 'concept' then each card has 10+ concepts, and the algorithm is not designed for this situation and doesn't work well. If the issue isn't obvious, a 45min episode is 600+ cards, so a season is ~10,000. an intermediate learner might only really need to work through a tenth of those in order to assimilate most of the vocabulary.

It is also possible to simply export words from software like LWT or LingQ. This approach is just as problematic. Words occur in a context in the wild, and there are mountains of studies showing empirically that rote memorization of word lists outside their context doesn't work. Corollary to that is that words have several meanings and occur in collocations, so making a good word card is actually not trivial.

**Solution: Semi-automatic flashcards**
Munnin solves this by creating sentence-flashcards but also tracking the exposure of each word inside the cards. It works like this:

1. A new subtitle file is added. Each caption is a potential card.
2. Munnin keeps a table of all the words which the user is learning and all the words which are known (similar to LingQ and LWT). Munnin now uses this data to make a familiarity assessment in each card. Cards where all vocabulary is known will be discarded (this immediately gets rid of a lot of fluff). Cards where some vocabulary is new are given priority. Cards with only some unfamiliar language (previously encountered) are ranked by familiarity.
3. As cards get revised, users can mark unfamiliar vocabulary and known vocabulary. This can be done quite efficiently by clicking on words. Future cards get their familiarity reassessed before they are shown. This also discards many future cards.

**Bonus: Video player**
Munnin embeds a video player for watching videos with subtitles in both languages (target is presented and translation can be easily shown with a key press). These timestamps are recorded by Munnin and can be used later. For example, review sessions can be done only on the captions where the video was stopped.
