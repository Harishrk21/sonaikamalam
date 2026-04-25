import './PageHeader.css'

type Props = {
  title: string
  intro?: string
}

export function PageHeader({ title, intro }: Props) {
  return (
    <div className="page-header">
      <h1 className="page-header__title">{title}</h1>
      {intro ? <p className="page-header__intro">{intro}</p> : null}
    </div>
  )
}
