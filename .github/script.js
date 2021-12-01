module.exports = ({github, context}) => {
    return {before: github.event.before, after:github.event.after}
  }