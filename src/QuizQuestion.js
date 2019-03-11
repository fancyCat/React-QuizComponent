import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {

  handleClick(button_text) {
    if (button_text === this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler()
    }
  }

  render () {
    return (
      <main>
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
