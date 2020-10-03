package accounts.rest.response;

import accounts.dto.AccountDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor(staticName = "of")
public class GetCustomerAccountsResponse {

    private List<AccountDto> accounts;
}
