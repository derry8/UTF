import React from 'react';

export default function Rules() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-10 w-full px-6 pb-24 rounded-2xl">
      {/* Server Rules */}
      <section className="flex-1">
        <h3 className="text-3xl font-bold text-cyan-600 mb-4">📜 Server Rules</h3>
        <ul className="space-y-4 text-gray-800 leading-relaxed list-disc list-inside">
          <li>🛡️ <strong>Respect Everyone:</strong> No hate speech, racism, harassment, or toxic behavior. Banter is fine — abuse is not.</li>
          <li>🚫 <strong>No Spamming or Self-Promo:</strong> Keep chats clean. No advertising without permission.</li>
          <li>🔞 <strong>Keep it PG-13:</strong> No NSFW content — let’s keep this football, not filth.</li>
          <li>📢 <strong>Follow Staff Instructions:</strong> Listen to admins & mods. They keep the league running smooth.</li>
          <li>👤 <strong>One Account per Player:</strong> No smurfing, no alt accounts. You’ll get banned.</li>
          <li>✅ <strong>By staying here, you agree to follow all rules.</strong></li>
        </ul>
      </section>

      {/* In-Game Rules */}
      <section className="flex-1">
        <h3 className="text-3xl font-bold text-cyan-600 mb-4">🎮 In-Game Rules</h3>
        <ul className="space-y-4 text-gray-800 leading-relaxed list-disc list-inside">
          <li>⚽ <strong>Game Mode:</strong> Ultimate Team – Friendly Seasons</li>
          <li>🕒 <strong>Match Length:</strong> 6 minutes per half</li>
          <li>🌍 <strong>Connection:</strong> Wired preferred. Use closest server.</li>
          <li>🚫 <strong>No Custom Tactics Exploits:</strong> 5-back, constant pressure abuse, etc. will be punished.</li>
          <li>🤝 <strong>DC/Drop Rules:</strong> 
            <br />– Before 10th min: rematch. 
            <br />– After 10th: replay only if both agree.
          </li>
          <li>🔄 <strong>Team Restrictions:</strong> Post your lineup in #lineups at least 1 hour before kickoff.</li>
          <li>🧤 <strong>No GK Glitch / No Tactical Pause Abuse:</strong> Play fair or risk auto-loss.</li>
          <li>📸 <strong>Proof Required:</strong> Screenshot result screen or use match reports to confirm scores.</li>
          <li>🟥 <strong>Red Cards:</strong> Player must sit out next match.</li>
          <li>🟨 <strong>Yellow Cards:</strong> 5 yellows = 1 match ban.</li>
        </ul>
      </section>
    </div>
  );
}
