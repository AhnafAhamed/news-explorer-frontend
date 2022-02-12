import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SavedNews from "../SavedNews/SavedNews";

function SavedNewsPage({ savedNewsCards, onSignOutClick, isLoggedIn, onSignInClick, userName }) {
  return (
    <div>
      <Header
        onSignOutClick={onSignOutClick}
        isLoggedIn={isLoggedIn}
        onSignInClick={onSignInClick}
        userName={userName}
      />
      <SavedNews savedNewsCards={savedNewsCards} isLoggedIn={isLoggedIn} />
      <Footer />
    </div>
  );
}

export default SavedNewsPage;
