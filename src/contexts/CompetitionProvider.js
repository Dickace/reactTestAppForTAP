import CompetitionContext from './CompetitionContext';

// По хорошему тут бы всю передачу пропсов через контекст сделать, но я запутался))
// eslint-disable-next-line no-unused-vars
function CopmetitionsProvider() {
  return (
  // eslint-disable-next-line react/react-in-jsx-scope
    <CompetitionContext.Provider />
  );
}
