import Card from '../ui/Card/Card'
import CardHeader from '../ui/Card/CardHeader'
import CardBody from '../ui/Card/CardBody'
import CardFooter from '../ui/Card/CardFooter'
import useToggle from '../../hooks/useToggle'

function AboutCard({ title, text }) {
  const [expanded, toggleExpanded] = useToggle(false)

  const shortText =
    text.length > 160 ? `${text.slice(0, 160)}...` : text

  return (
    <Card className="about-card">
      <CardHeader title={title} />

      <CardBody>
        <p>{expanded ? text : shortText}</p>
      </CardBody>

      <CardFooter>
        <button type="button" onClick={toggleExpanded}>
          {expanded ? 'Show Less' : 'Read More'}
        </button>
      </CardFooter>
    </Card>
  )
}

export default AboutCard