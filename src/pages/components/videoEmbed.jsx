export default function VideoEmbed({ videoId, title = "Embedded Video" }) {
  // Parametri per un player il più pulito possibile:
  // controls=0: Nasconde la barra di controllo (quindi anche play/pause, volume, fullscreen, ecc.)
  //             Questo implica anche la rimozione del tasto share dalla barra.
  // loop=1: Riproduce il video in loop.
  // playlist={videoId}: Necessario per far funzionare correttamente loop=1 con un singolo video.
  // rel=0: Non mostra video correlati alla fine della riproduzione.
  // modestbranding=1: Rimuove il logo di YouTube dalla barra di controllo.
  // showinfo=0: Nasconde il titolo del video e le informazioni dell'uploader.
  // disablekb=1: Disabilita i controlli da tastiera.
  // iv_load_policy=3: Non mostra le annotazioni nel video.
  // fs=0: Disabilita il pulsante di fullscreen (opzionale, se vuoi proprio bloccarlo).
  const embedUrl = `https://www.youtube.com/embed/${videoId}?controls=0&loop=1&playlist=${videoId}&rel=0&modestbranding=1&showinfo=0&disablekb=1&iv_load_policy=3&fs=0`;

  return (
    <div className="w-full max-w-xl mx-auto bg-default/30 rounded-xl overflow-hidden shadow-lg">
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          src={embedUrl}
          title={title}
          frameBorder="0"
          // Manteniamo solo le autorizzazioni essenziali e standard per un embed pulito.
          // 'autoplay' non è incluso nell'URL per permettere all'utente di avviare.
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen // Puoi rimuovere anche questo se non vuoi proprio il fullscreen
        ></iframe>
      </div>
    </div>
  );
}