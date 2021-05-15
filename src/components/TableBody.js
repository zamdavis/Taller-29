const TableBody = (props) => {
  const rows = props.charactersData.map((character, index) => {
    return (
      <tr key={index}>
        <td>{character.name}</td>
        <td>{character.job}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

export default TableBody;
