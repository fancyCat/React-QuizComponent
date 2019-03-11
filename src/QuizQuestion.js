import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {

  constructor(props) {
    super(props)

    this.state = { incorrectAnswer: false }
  }

  handleClick(button_text) {
    if (button_text === this.props.quiz_question.answer) {
      this.setState((state) => {
        return {incorrectAnswer: false}
      })
      this.props.showNextQuestionHandler()
    } else {
      this.setState((state) => {
        return {incorrectAnswer: true}
      })
    }
  }

  render () {
    return (
      <main>
        {this.state.incorrectAnswer === true ? <p className='error'>Sorry, that's not right</p> : null}
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section>
          <ul>
            {this.props.quiz_question.answer_options.map((answer, i) =>
              <QuizQuestionButton
                clickHandler={ this.handleClick.bind(this) }
                button_text={answer} key={i}/>)
            }
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion
