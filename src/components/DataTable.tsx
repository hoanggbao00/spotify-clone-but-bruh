import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';



interface DataTableProps {
  columns: DataTableColumn[];
  data: Track[] | any[];
}

const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {

  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow className="flex items-center h-full">
          {columns.map((column) => (
            <TableHead
						key={column.headerAccessKey}
              className={`flex items-center ${
                column.text ? `text-${column.text}` : ''
              } ${column.span ? `flex-${column.span}` : ''}`}
            >
              {column.title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.isArray(data) && data.map((song, index) => {
          
          return (
            <TableRow key={song && song.key} className="flex items-center">
              <TableCell className={`flex items-center`}>{index}</TableCell>

              <TableCell className={`flex items-center text-left flex-1`}>
                {song ? song.title : 'song name'}
              </TableCell>
							<TableCell className={`flex items-center text-left flex-1`}>
                {song && Array.isArray(song.sections) ? song.sections[0].metadata[0].text : `song's album`}
              </TableCell>
							<TableCell className={`flex items-center text-left flex-1`}>
                {song && Array.isArray(song.sections) ? song.sections[0].metadata[2].text: '2020-06-20'}
              </TableCell>
							<TableCell className={`flex items-center text-right`}>
                {song ? song.genres.primary : 'UNKNOWN'}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default DataTable;
