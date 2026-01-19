export default function SectionMoba() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto pb-4 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
          What is a MOBA?
        </h2>
        <p className="text-lg leading-7 text-gray-700 dark:text-gray-300 mb-4">
          A MOBA, or Multiplayer Online Battle Arena, is a popular genre of
          online gaming that combines elements of strategy, action, and
          teamwork. In a typical MOBA game, players are divided into two teams
          and compete against each other on a predefined battlefield. Each
          player controls a unique character, often referred to as a "hero" or
          "champion," each with its own set of abilities and roles.
        </p>
        <p className="text-lg leading-7 text-gray-700 dark:text-gray-300 mb-4">
          The primary objective in most MOBA games is to destroy the opposing
          team's main structure, often called the "Nexus" or "Ancient," while
          defending your own. Players must work together to achieve this goal by
          coordinating attacks, defending key areas, and managing resources.
        </p>
      </div>
      <div className="container mx-auto px-4 pb-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
          MOBA Game Examples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">League of Legends</h3>
            <p className="text-gray-700 dark:text-gray-300">A popular MOBA game developed by Riot Games.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Dota 2</h3>
            <p className="text-gray-700 dark:text-gray-300">A competitive MOBA game developed by Valve Corporation.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Heroes of Newerth</h3>
            <p className="text-gray-700 dark:text-gray-300">A free-to-play MOBA game developed by Newerth.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
