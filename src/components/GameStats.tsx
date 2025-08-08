
type GameStatsProps = {
  wins: number;
  losses: number;
  effectiveness: number;
};

const GameStats = ({ wins, losses, effectiveness }: GameStatsProps) => {
  return (
    <div className="mt-6 bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold text-center mb-4">Estadísticas del Juego</h3>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <h4 className="text-lg font-semibold">Victorias</h4>
          <p className="text-2xl">{wins}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Derrotas</h4>
          <p className="text-2xl">{losses}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Efectividad</h4>
          <p className="text-2xl">{effectiveness.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
};

export default GameStats;
