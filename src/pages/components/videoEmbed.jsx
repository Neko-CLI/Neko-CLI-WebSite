export default function VideoEmbed({ videoId, title = "Embedded Video" }) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?controls=0&loop=1&playlist=${videoId}&rel=0&modestbranding=1&showinfo=0&disablekb=1&iv_load_policy=3&fs=0`;

  return (
    <div className="w-full max-w-xl mx-auto bg-default/30 rounded-xl overflow-hidden shadow-lg">
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}