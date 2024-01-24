export default function ImportSegmentsBar({ percent }) {
  return <div className="__segments-bar">
    <div className="__process-bar" style={ {width: `${ percent }%`} }>
      
    </div>
  </div>
}