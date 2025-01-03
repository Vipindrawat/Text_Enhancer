import React from 'react'

const About = (props) => {
      return (
            <div className='vijay container' style={props.alert ? { marginTop: "29px", marginBottom: "100px" } : { marginTop: "137.5px", marginBottom: "100px" }}>
                  <h1>
                        What is TextEnhancer?
                  </h1><br />

                  <h3>
                        Apart from counting words and characters, our online editor can help you to improve word choice and writing style.
                        To check word count, simply place your cursor into the text box above and start typing. You'll see the number of characters and words increase or decrease as you type, delete, and edit them. You can also copy and paste text from another program .
                  </h3><br />
                  <h3>
                        Knowing the word count of a text can be important. For example, if an author has to write a minimum or maximum amount of words for an article, essay, report, story, book, paper, you name it. WordCounter will help to make sure its word count reaches a specific requirement or stays within a certain limit.
                  </h3><br />

                  <h3>
                        In the Details overview you can see the average speaking and reading time for your text, while Reading Level is an indicator of the education level a person would need in order to understand the words you're using.
                  </h3><br />

                  <h3>
                        Disclaimer: We strive to make our tools as accurate as possible but we cannot guarantee it will always be so.
                  </h3><br />
            </div>
      )
}

export default About;
