const tabs = [{ name: "My Account" }, { name: "Watchlist" }];

export default function ProfileNav({ activeTab, setActiveTab }) {
  return (
    <div>
      <div className="block">
        <nav
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
          aria-label="Tabs"
        >
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-center text-sm font-medium focus:z-10 ${
                activeTab === tab.name
                  ? "bg-gray-300 hover:cursor-default shadow-md shadow-gray-600/40"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 h-0.5 ${
                  activeTab === tab.name ? "bg-green-600" : "bg-gray-200"
                }`}
              />
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
