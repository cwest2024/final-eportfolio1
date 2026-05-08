import Card from '../ui/Card/Card'
import CardHeader from '../ui/Card/CardHeader'
import CardBody from '../ui/Card/CardBody'
import CardFooter from '../ui/Card/CardFooter'
import useToggle from '../../hooks/useToggle'

function ResumeCard({ title, subtitle, meta, bullets = [] }) {
  const [expanded, toggleExpanded] = useToggle(false)

  const visibleBullets = expanded ? bullets : bullets.slice(0, 2)

  return (
    <Card className="resume-card">
      <CardHeader title={title} subtitle={subtitle} meta={meta} />

      <CardBody>
        <ul>
          {visibleBullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </CardBody>

      {bullets.length > 2 && (
        <CardFooter>
          <button type="button" onClick={toggleExpanded}>
            {expanded ? 'Show Less' : 'Show More'}
          </button>
        </CardFooter>
      )}
    </Card>
  )
}

export default ResumeCard