
type GameStatsProps = {
  wins: number;
  losses: number;
  effectiveness: number;
};

const GameStats = ({ wins, losses, effectiveness }: GameStatsProps) => {
  return (
    <div className="card mt-4">
      <div className="card-header text-center">
        <h3>Estadísticas del Juego</h3>
      </div>
      <div className="card-body">
        <div className="row text-center">
          <div className="col">
            <h4>Victorias</h4>
            <p className="fs-4">{wins}</p>
          </div>
          <div className="col">
            <h4>Derrotas</h4>
            <p className="fs-4">{losses}</p>
          </div>
          <div className="col">
            <h4>Efectividad</h4>
            <p className="fs-4">{effectiveness.toFixed(2)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStats;
