type Author = {
  imageUrl: string
  authorName: string
  position?: string
  publishData?: string
}

const Author = (props: Author) => {
  return (
    <div className="mb-3 flex items-center">
      <img
        className="h-12 w-12 rounded-full"
        src={props.imageUrl}
        alt={props.authorName}
      />
      <div className="ml-4">
        <p className="font-bold">{props.authorName}</p>
        <p className="text-gray-600">{props.position}</p>
      </div>
    </div>
  )
}

export default Author
