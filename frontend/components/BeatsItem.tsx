// components/BeatItem.js
export default function BeatItem({ beat }:{beat: any}) {
    return (
      <div className="flex items-center justify-between p-4 bg-gray-800 rounded-md my-2">
        <div className="flex items-center space-x-4">
          <img src={beat.image} alt={beat.name} className="w-12 h-12 rounded-md" />
          <div>
            <h3 className="text-lg text-white">{beat.name}</h3>
            <p className="text-sm text-gray-400">{beat.artist}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {beat.tags.map((tag:any) => (
            <span key={tag} className="px-2 py-1 text-xs bg-gray-700 rounded-full text-white">
              #{tag}
            </span>
          ))}
        </div>
        <div className="text-purple-500 font-bold">{beat.price}</div>
      </div>
    );
  }
  