interface AdminTitleProps {
  title: string
}

function AdminTitle({ title }: AdminTitleProps) {
  return <h3 className="mb-6 text-2xl font-bold">{title}</h3>
}

export default AdminTitle
